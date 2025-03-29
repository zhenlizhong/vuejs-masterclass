/* eslint-env node */
import { fakerZH_CN as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVISE_ROLE_KEY)

// const personName = faker.person.fullName()
// const personBio = faker.person.bio()

// console.log('Hi! my name is' + personName + ', ' + personBio)

const seedProjects = async (num) => {
  const insertData = []
  for (let i = 0; i < num; i++) {
    // dashboard
    const name = faker.lorem.words(3)
    insertData.push({
      name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }
  const data = await supabase.from('projects').insert(insertData)
  console.log(data)
}

await seedProjects(10)
