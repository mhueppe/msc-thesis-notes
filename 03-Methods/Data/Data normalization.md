
# Tasks
- [ ] Pertubate missing values 🔼 
- [x] transform description, details and other free text option ✅ 2025-09-14
	- use: [A searchable Crystallization database](https://github.com/Hauptman-Woodward/crystallizationDatabase/tree/master)
- [x] use chatGPT to normalize free text information into vectorized format ✅ 2025-09-14
	- →  did not work ✅ 2025-09-14
- [x] transform methods into uniform method set ✅ 2025-09-14
- [x] Clean up Data preprocessing ✅ 2025-09-25
- [x] Clean up details parsing ✅ 2025-09-25
- [x] Clean up utils ✅ 2025-09-25

When looking into the different fields and their values as done in [[Data Features]] it becomes clear the data has to be normalized. Some samples can be seen in the following: 

While pH Value, Temperature and Resolution are typically numerical, the cocktail is given in the details description in a not normalized free text. 

| Protein     | Details description                                                                                                         | pH Value | Temperature | Resolution |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- | ---------- |
| 5ulc.cif.gz | ['8% PEG 8000, 0.1 M Tris, Chymotrypsin, pH 8.5']                                                                           | ['8.5']  | ['293']     | ['2.4000'] |
| 7h2z.cif.gz | ['0.1 M MES, pH 6.05, 16 % PEG 20,000']                                                                                     | ['6.05'] | ['293.15']  | ['1.04']   |
| 8ag0.cif.gz | ['Sodium acetate pH 4.6, 8% (w/v) PEG 4000']                                                                                | ['4.6']  | ['293.15']  | ['2.70']   |
| 8jyi.cif.gz | ['0.1M MES, 26%(v/v) PEG6000, 0.01 M Zinc Sulfate, 0.001 M MANGANESE CHLORIDE']                                             | ['6.6']  | ['291']     | ['1.92']   |
| 5elb.cif.gz | ['0.1 M Bicine-Tris, 10% PEG1000, 10% PEG3350, 10% MPD, 0.03 M calcium chloride, 0.03 M magnesium chloride. Microseeding.'] | ['8.5']  | ['293']     | ['1.08']   |

The data should be parsed to read and save following attributes: 

- **Buffer** name (e.g., Tris, HEPES, Bis-Tris, etc.)
- **Buffer concentration** (M)
- **Buffer pH**
- **Salt(s)** name and concentration (M)
- **Precipitant(s)** type (e.g., PEG 3350, PEG 400) and concentration (% w/v, v/v)
- **Additives** (small molecules, ligands)
- **Method** (Vapor Diffusion, Sitting Drop, Hanging Drop, Microbatch, etc.)
- **Temperature** (K or °C)

Results: 

 ```json 
  '3ZTB': {'pH': 6.5,
  'temp': None,
  'compounds': {'PEG 3350': '20%', 'nai': '200.0', 'bis-tris': '100.0'}},
  '3ZUC': {'pH': 7.5,
  'temp': None,
  'compounds': {'ammonium sulfate': '1900.0',
   'hepes': '100.0',
   'PEG 400': '0.5% w/v',
   'nickel chloride': '200.0'}}, 
   '3ZVG': {'pH': 4.6,
  'temp': None,
  'compounds': {'sodium acetate': '70.0',
   'PEG 4000': '15%',
   'glycerol': '30%'}},
 ```
	 