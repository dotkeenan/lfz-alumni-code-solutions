const graduate = (credential) => {
  return (fullName) => {
    return `${fullName}, ${credential}`
  }
}

const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')

console.log(medicalSchool('Gregory House'))
console.log(lawSchool('Harry Specter'))
