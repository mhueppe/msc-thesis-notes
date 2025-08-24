
# Tasks
- [ ] Pertubate missing values 🔼 
- [ ] transform description, details and other free text option

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

goal structure: 

|sequence_id|buffer|buffer_conc|ph|salt|salt_conc|precipitant|prec_conc|temp_k|method|
|---|---|---|---|---|---|---|---|---|---|
|P12345|tris|0.1 M|8.5|sodium citrate|0.2 M|peg 400|30 %|289|vapor diffusion|
|...|...|...|...|...|...|...|...|...|...|

