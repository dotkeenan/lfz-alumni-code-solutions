const graduate = (credential) => {
  return (fullName) => {
    return `${fullName}, ${credential}`
  }
}

const medicalSchool = graduate('M.D.')
const lawSchool = graduate('Esq.')

MedicalSchool('Keenan Ng')
lawSchool('Harry Specter')
