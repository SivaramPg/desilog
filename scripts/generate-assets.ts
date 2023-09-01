import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const fsPromises = fs.promises

const avatarsDir = path.resolve(__dirname, '../src/assets/raw')
const charactersDir = path.resolve(
  __dirname,
  '../src/assets/raw/characters/vibrant'
)
const charactersBWDir = path.resolve(
  __dirname,
  '../src/assets/raw/characters/mono'
)

const publicDir = path.resolve(__dirname, '../src/assets/static')

const main = async () => {
  try {
    const [avatars, characters, charactersBW] = await Promise.all([
      fsPromises.readdir(avatarsDir),
      fsPromises.readdir(charactersDir),
      fsPromises.readdir(charactersBWDir),
    ])

    if (!fs.existsSync(path.resolve(publicDir, './avatars'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './avatars'))
    }

    let count1 = 1
    for (let avatar of avatars) {
      if (!avatar.includes('.png')) continue
      const buffer = await fsPromises.readFile(path.resolve(avatarsDir, avatar))
      await sharp(buffer)
        .resize(1000, 1000)
        .png({ quality: 85 })
        .toFile(path.resolve(publicDir, `avatars/${count1}.png`))
      await sharp(buffer)
        .resize(1000, 1000)
        .jpeg({ mozjpeg: true, quality: 75 })
        .toFile(path.resolve(publicDir, `avatars/${count1}.jpg`))
      count1++
    }

    if (!fs.existsSync(path.resolve(publicDir, './characters/vibrant'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './characters/vibrant'), {
        recursive: true,
      })
    }

    let count2 = 1
    for (let character of characters) {
      if (!character.includes('.png')) continue
      const buffer = await fsPromises.readFile(
        path.resolve(charactersDir, character)
      )
      await sharp(buffer)
        .resize(2000, 2000, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ quality: 85 })
        .toFile(path.resolve(publicDir, `characters/vibrant/${count2}.png`))

      await sharp(buffer)
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .resize(2000, 2000, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })

        .jpeg({ mozjpeg: true, quality: 75 })
        .toFile(path.resolve(publicDir, `characters/vibrant/${count2}.jpg`))
      count2++
    }

    if (!fs.existsSync(path.resolve(publicDir, './characters/mono'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './characters/mono'), {
        recursive: true,
      })
    }

    let count3 = 1
    for (let characterBW of charactersBW) {
      if (!characterBW.includes('.png')) continue
      const buffer = await fsPromises.readFile(
        path.resolve(charactersBWDir, characterBW)
      )
      await sharp(buffer)
        .resize(2000, 2000, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png({ quality: 85 })
        .toFile(path.resolve(publicDir, `characters/mono/${count3}.png`))

      await sharp(buffer)
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .resize(2000, 2000, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 },
        })
        .jpeg({ mozjpeg: true, quality: 75 })
        .toFile(path.resolve(publicDir, `characters/mono/${count3}.jpg`))
      count3++
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
