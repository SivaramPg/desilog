import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const fsPromises = fs.promises

const avatarsDir = path.resolve(__dirname, '../src/assets/desilog/avatars')
const charactersDir = path.resolve(
  __dirname,
  '../src/assets/desilog/characters'
)
const charactersMonochromeDir = path.resolve(
  __dirname,
  '../src/assets/desilog/characters-monochrome'
)

const publicDir = path.resolve(__dirname, '../public')

const main = async () => {
  try {
    const [avatars, characters, charactersMonochrome] = await Promise.all([
      fsPromises.readdir(avatarsDir),
      fsPromises.readdir(charactersDir),
      fsPromises.readdir(charactersMonochromeDir),
    ])

    if (!fs.existsSync(path.resolve(publicDir, './avatars'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './avatars'))
    }

    let count1 = 1
    for (let avatar of avatars) {
      if (!avatar.includes('.png')) continue
      const buffer = await fsPromises.readFile(path.resolve(avatarsDir, avatar))
      await sharp(buffer)
        .resize(1000)
        .png({ quality: 80 })
        .toFile(path.resolve(publicDir, `avatars/${count1}.png`))
      count1++
    }

    if (!fs.existsSync(path.resolve(publicDir, './characters'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './characters'))
    }

    let count2 = 1
    for (let character of characters) {
      if (!character.includes('.png')) continue
      const buffer = await fsPromises.readFile(
        path.resolve(charactersDir, character)
      )
      await sharp(buffer)
        .resize(1000)
        .png({ quality: 80 })
        .toFile(path.resolve(publicDir, `characters/${count2}.png`))
      count2++
    }

    if (!fs.existsSync(path.resolve(publicDir, './characters-monochrome'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './characters-monochrome'))
    }

    let count3 = 1
    for (let characterMonochrome of charactersMonochrome) {
      if (!characterMonochrome.includes('.png')) continue
      const buffer = await fsPromises.readFile(
        path.resolve(charactersMonochromeDir, characterMonochrome)
      )
      await sharp(buffer)
        .resize(1000)
        .png({ quality: 80 })
        .toFile(path.resolve(publicDir, `characters-monochrome/${count3}.png`))
      count3++
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
