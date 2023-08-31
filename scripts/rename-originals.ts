import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const fsPromises = fs.promises

const avatarsDir = path.resolve(__dirname, '../public/original/avatars')
const charactersDir = path.resolve(__dirname, '../public/original/characters')
const charactersBWDir = path.resolve(
  __dirname,
  '../public/original/characters-bw'
)

const main = async () => {
  try {
    const [avatars, characters, charactersBW] = await Promise.all([
      fsPromises.readdir(avatarsDir, { withFileTypes: true }),
      fsPromises.readdir(charactersDir, { withFileTypes: true }),
      fsPromises.readdir(charactersBWDir, { withFileTypes: true }),
    ])

    let count1 = 1
    for (let avatar of avatars) {
      if (!avatar.name.includes('.png')) continue

      await fsPromises.rename(
        path.resolve(avatar.path, avatar.name),
        path.resolve(avatar.path, `${count1}.png`)
      )
      count1++
    }

    let count2 = 1
    for (let character of characters) {
      if (!character.name.includes('.png')) continue
      await fsPromises.rename(
        path.resolve(character.path, character.name),
        path.resolve(character.path, `${count2}.png`)
      )
      count2++
    }

    let count3 = 1
    for (let characterBW of charactersBW) {
      if (!characterBW.name.includes('.png')) continue
      await fsPromises.rename(
        path.resolve(characterBW.path, characterBW.name),
        path.resolve(characterBW.path, `${count3}.png`)
      )
      count3++
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

main()
