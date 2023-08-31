import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const fsPromises = fs.promises

const avatarsDir = path.resolve(__dirname, '../public/desilog/avatars')
const charactersDir = path.resolve(__dirname, '..public/desilog/characters')
const charactersBWDir = path.resolve(
  __dirname,
  '..public/desilog/characters-bw'
)

const publicDir = path.resolve(__dirname, '../public/optimised')

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
        .resize(2000, 2000, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })

        .png({ quality: 85 })
        .toFile(path.resolve(publicDir, `characters/${count2}.png`))
      count2++
    }

    if (!fs.existsSync(path.resolve(publicDir, './characters-bw'))) {
      await fsPromises.mkdir(path.resolve(publicDir, './characters-bw'))
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
        .toFile(path.resolve(publicDir, `characters-bw/${count3}.png`))
      count3++
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
