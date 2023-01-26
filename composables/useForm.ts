export const formRules = {
  required: [(v: string) => !!v || 'Dit veld is verplicht'],
  checkbox: [(v: boolean) => v === true || 'Dit veld is verplicht'],
  numberRules: [(v: string) => !!v || 'Dit veld is verplicht', (v: string) => /^\d+$/.test(v) || 'Dit veld moet een nummer zijn'],
  fileRules: [(v: any) => !!v || v.size < 2000000 || 'Bestanden mogen niet groter zijn dan 2 MB'],
  emailRules: [(v: any) => !!v || 'Dit veld is verplicht', (v: any) => /.+@.+\..+/.test(v) || 'E-mail moet geldig zijn'],
  dateRules: [(v: any) => !!v || 'Dit veld is verplicht', (v: any) => /^\d{4}-\d{2}-\d{2}$/.test(v) || 'Datum moet geldig zijn'],
  websiteRules: [
    (v: any) => !!v || 'Dit veld is verplicht',
    (v: any) => /^(http(s)?:\/\/)?((w){3}.)?[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(v) || 'Website moet geldig zijn',
  ],
  phoneRules: [
    (v: any) => !!v || 'Dit veld is verplicht',
    (v: any) => /^(?:(?:(?:\+|00)31|0)(?:\d-?\d{8}|\d\d-\d{7})|0\d{3}-\d{6})$/.test(v) || 'Telefoonnummer moet geldig zijn.',
  ],
  zipcodeRules: [(v: any) => !!v || 'Dit veld is verplicht', (v: any) => /^\d{4}\s?[a-zA-Z]{2}$/.test(v) || 'Postcode moet geldig zijn'],
}
