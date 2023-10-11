package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/h2non/bimg"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.StripSlashes)
	r.Use(middleware.CleanPath)

	r.Get("/", rootHandler)

	var avatarsIdRegex = "^([1-9]|[1-2][0-9]|3[0-9])$"
	var charactersIdRegex = "^([1-9]|[1-6][0-9]|7[0-2])$"
	var bwCharactersIdRegex = "^([1-9]|[1-6][0-9]|70)$"

	var avatarsWidthRegex = "^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)$"
	var charactersWidthRegex = "^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1[1-9][0-9][0-9]|2000)$"

	r.Get(fmt.Sprintf("/v2/avatars/r/{width:%s}", avatarsWidthRegex), randomAvatarHandler)
	r.Get(fmt.Sprintf("/v2/characters/r/{width:%s}", charactersWidthRegex), randomCharacterHandler)
	r.Get(fmt.Sprintf("/v2/characters-bw/r/{width:%s}", charactersWidthRegex), randomBwCharacterHandler)

	r.Get(fmt.Sprintf("/v2/avatars/{id:%s}/{width:%s}", avatarsIdRegex, avatarsWidthRegex), avatarHandler)
	r.Get(fmt.Sprintf("/v2/characters/{id:%s}/{width:%s}", charactersIdRegex, charactersWidthRegex), characterHandler)
	r.Get(fmt.Sprintf("/v2/characters-bw/{id:%s}/{width:%s}", bwCharactersIdRegex, charactersWidthRegex), bwCharacterHandler)

	r.NotFound(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(404)
		w.Write([]byte("page not found"))
	})

	r.MethodNotAllowed(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(405)
		w.Write([]byte("method is not valid"))
	})

	http.ListenAndServe(":3000", r)
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("OK"))
}

func randomAvatarHandler(w http.ResponseWriter, r *http.Request) {
	widthParam := chi.URLParam(r, "width")
	randomId := getRandomNumber(1, 39)

	http.Redirect(w, r, fmt.Sprintf("/v2/avatars/%d/%s", randomId, widthParam), http.StatusTemporaryRedirect)
}

func randomCharacterHandler(w http.ResponseWriter, r *http.Request) {
	widthParam := chi.URLParam(r, "width")
	randomId := getRandomNumber(1, 72)

	http.Redirect(w, r, fmt.Sprintf("/v2/characters/%d/%s", randomId, widthParam), http.StatusTemporaryRedirect)
}

func randomBwCharacterHandler(w http.ResponseWriter, r *http.Request) {
	widthParam := chi.URLParam(r, "width")
	randomId := getRandomNumber(1, 70)

	http.Redirect(w, r, fmt.Sprintf("/v2/characters-bw/%d/%s", randomId, widthParam), http.StatusTemporaryRedirect)
}

func avatarHandler(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")
	widthParam := chi.URLParam(r, "width")

	buffer, _ := bimg.Read(fmt.Sprintf("../src/assets/static/avatars/%s.jpg", idParam))

	dimension, _ := strconv.Atoi(widthParam)

	newImage, err := bimg.NewImage(buffer).Process(bimg.Options{Width: dimension, Height: dimension, Quality: 75})
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}

	writeCdnHeaders(w, len(newImage), "avatars", idParam, widthParam)
	w.Write(newImage)
}

func characterHandler(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")
	widthParam := chi.URLParam(r, "width")

	buffer, _ := bimg.Read(fmt.Sprintf("../src/assets/static/characters/vibrant/%s.jpg", idParam))

	dimension, _ := strconv.Atoi(widthParam)

	newImage, err := bimg.NewImage(buffer).Process(bimg.Options{Width: dimension, Height: dimension, Quality: 75})
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}

	writeCdnHeaders(w, len(newImage), "characters", idParam, widthParam)
	w.Write(newImage)
}

func bwCharacterHandler(w http.ResponseWriter, r *http.Request) {
	idParam := chi.URLParam(r, "id")
	widthParam := chi.URLParam(r, "width")

	buffer, _ := bimg.Read(fmt.Sprintf("../src/assets/static/characters/mono/%s.jpg", idParam))

	dimension, _ := strconv.Atoi(widthParam)

	newImage, err := bimg.NewImage(buffer).Process(bimg.Options{Width: dimension, Height: dimension, Quality: 75})
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}

	writeCdnHeaders(w, len(newImage), "characters-bw", idParam, widthParam)
	w.Write(newImage)
}

func getRandomNumber(min int, max int) int {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	return r.Intn(max-min) + min
}

func writeCdnHeaders(w http.ResponseWriter, clen int, assetType string, id string, width string) {
	w.Header().Add("content-type", "image/jpeg")
	w.Header().Add("content-length", strconv.Itoa(clen))
	w.Header().Add("content-disposition", fmt.Sprintf("inline; filename='%s-%s-%sx%s.jpg'", assetType, id, width, width))
	w.Header().Add("cache-control", "public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=60, stale-if-error=43200, immutable")
}
