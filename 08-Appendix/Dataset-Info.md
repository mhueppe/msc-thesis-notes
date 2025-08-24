- All information was build on: [The user guide](https://mmcif.wwpdb.org/docs/user-guide/guide.html#mx)
- [Offline User guide](obsidian://open?vault=MasterThesisVault&file=08-Appendix%2Fmedia%2FMMCIF%20USER%20GUIDE.htm)
- Data items: 
	- _ + category name + attribute name
	- `_citation.year`
	- called mmCIF token 
# Data categories: 

## Category structure
### key-value
- mmCIF token is directly followed by corresponding value
- `_cell.entry_id           4HHB`
### tabular
- used when there are multiple values for each token
- loop_ token followed by rows of data item names 
- then white-space delimited data values

```
loop_  
_atom_site.group_PDB  
_atom_site.id  
_atom_site.type_symbol  
_atom_site.label_atom_id  
_atom_site.label_alt_id  
_atom_site.label_comp_id  
_atom_site.label_asym_id  
_atom_site.label_entity_id  
_atom_site.label_seq_id  
_atom_site.pdbx_PDB_ins_code  
_atom_site.Cartn_x  
_atom_site.Cartn_y  
_atom_site.Cartn_z  
_atom_site.occupancy  
_atom_site.B_iso_or_equiv  
_atom_site.pdbx_formal_charge  
_atom_site.auth_seq_id  
ATOM   1    N  N   . VAL A 1 1   ? 6.204   16.869  4.854   1.00 49.05 ? 1  
ATOM   2    C  CA  . VAL A 1 1   ? 6.913   17.759  4.607   1.00 43.14 ? 1   
ATOM   3    C  C   . VAL A 1 1   ? 8.504   17.378  4.797   1.00 24.80 ? 1   
ATOM   4    O  O   . VAL A 1 1   ? 8.805   17.011  5.943   1.00 37.68 ? 1   
ATOM   5    C  CB  . VAL A 1 1   ? 6.369   19.044  5.810   1.00 72.12 ? 1   
ATOM   6    C  CG1 . VAL A 1 1   ? 7.009   20.127  5.418   1.00 61.79 ? 1   
ATOM   7    C  CG2 . VAL A 1 1   ? 5.246   18.533  5.681   1.00 80.12 ? 1   
```

## Entities
- a chemically distinct part of a structure as represented in the mmCIF data file 
- `_entity` describe the chemistry and identify of the molecules under investigation
- each entity is assigned a unique numerical identifier `entity.id` 
- Details about each unique molecular entity (protein, nucleic acid, carbohydrate, small molecule) present in the structure
- [entity.id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_entity.id.html) is a unique identifier of all unique polymer and non-polymer molecules in the structure. This value is referred to in many 'child' categories within the model file connecting all the information pertaining to a particular molecular entity together.
- [entity.type](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_entity.type.html) can be: polymer, branched, non-polymer, or water.
- Each polymer entity is expected to have a corresponding record in the [entity_poly](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/entity_poly.html), [_entity_poly_seq](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/entity_poly_seq.html), and [_pdbx_poly_seq_scheme](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/pdbx_poly_seq_scheme.html) categories.
- [entity.src_method](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_entity.src_method.html) - defines the type of method by which the entity was produced: naturally obtained (_nat), recombinantly expressed (man), or chemically synthesized (syn).
- Source information for each polymer entity must be provided in either [entity_src_nat](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/entity_src_nat.html) (naturally obtained), [_entity_src_gen](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/entity_src_gen.html) (recombinantly expressed), or [_pdbx_entity_src_syn](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/pdbx_entity_src_syn.html) (chemically synthesized).

## Chemical Component Dictionary
- Chemical descriptions of all of the monomers and ligands in PDB structures are provided in PDBx/mmCIF format in the chemical component dictionary 

## Data blocks
- `_data` -> logical partition of a data file designated by a `_data` record

## Experimental Method
- `_exptl` -> Experimental method used to collect data
```
_exptl.entry_id          4HHB
_explt.method            'X-RAY DIFFRACTION'
_exptl.crystals_number   ? 
```

# Information specific To Macromolecular Crystallography 

For more information see: [[Data Features]] 

## Crystal growth 
`_exptl_crysal_grow`: Details about the conditions and methods used to grow the crystal 

|                                  |                                                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| _exptl_crystal_grow.apparatus    | ?                                                                                                              |
| _exptl_crystal_grow.crystal_id   | 1                                                                                                              |
| _exptl_crystal_grow.method       | 'VAPOR DIFFUSION, SITTING DROP'                                                                                |
| _exptl_crystal_grow.pH           | 5.5                                                                                                            |
| _exptl_crystal_grow.pdbx_details | '0.4uL protein, 0.4 uL 100mM Bis-Tri pH 5.5, 25% PEG 3350, 0.2M NaCl equilibrated against a well of 0.5M LiCl' |
| _exptl_crystal_grow.temp         | 298                                                                                                            |


## Crystal information

`_exptl_crystal`:  Results of experimental measurements on the crystal or crystals used, such as shape, size or density

| _exptl_crystal.density_Matthews    | 2.16  |
| ---------------------------------- | ----- |
| _exptl_crystal.density_percent_sol | 43.08 |
| _exptl_crystal.id                  | 1     |

## Data collection (Diffraction information)

`_diffrn`: Details about the diffraction experiment ambient conditions

|   |   |
|---|---|
|_diffrn.id|1|
|_diffrn.ambient_temp|100|
|_diffrn.crystal_id|1|
|_diffrn.details|?|
|_diffrn.pdbx_serial_crystal_experiment|N|
## Crystallographic and Coordinate Transformation Section

- `_symmetry`: Details about the space group symmetry
- `_cell`: Details about the crystallographic cell parameters
- `_atom_sites`: Details about the matrix used to transform fractional coordinates to cartesian coordinates
## Additional Information
- `_diffrn_detector`: Details about the detector used to measure the scattered radiation, including any analyser and post-sample collimation
- `_diffrn_radiation`: Details about the radiation used in measuring the diffraction intensities, its collimation and monochromatization before the sample 
- `_diffrn_radition_wavelength`: Details about the wavelength of the radiation used to measure the diffraction intensities. Several wavelengths can be provided here to describe for example muti-wavelength experiments, such as MAD
- `_diffrn_source`: Details of the source of radiation used in diffraction experiment
- `_software`
- `_reflns`: Overall data collection statistics for the X-ray diffraction experiment
- `_reflns_`

# Structure
## Assembly
- `_pdbx_struct_assembly` : Details about the structural elements that form macromolecular assemblies
- functional molecular form: monomer, dimer, tetramer, viral capsid
- which chains or components are included
- which symmetry/rotation/translation operations to apply to get the fully functional complex
- derived from 3D coordinates 

## Secondary structure
- `struct_conf_type`: Type of the conformation of the backbone of the polymer

# Coordinate Section
- `_atom_site`: Details about the atoms in a macromolecular crystal structure, such as the positional coordinates, temperature factors and occupancies
-  [atom_site.label_asym_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.label_asym_id.html) - ASYM ID, a unique and sequential identifier of each molecule (starting from letter A) in the model. This data item is a pointer to [_struct_asym.id](http://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_struct_asym.id.html) in the [_struct_asym](http://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/struct_asym.html) category.
    - ASYM_ID can be different from the author provided (or PDB assigned) chain identifier (Chain ID), ASYM_ID is assigned sequentially starting from letter A to all polymer and non-polymer molecule instances in the structure.
    - All water molecules are assigned one ASYM_ID.
- [atom_site.auth_asym_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.auth_asym_id.html) - author provided (or PDB assigned) Chain ID.
- [atom_site.label_entity_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.label_entity_id.html) - a unique identifier of all unique polymer and non-polymer molecules in the structure as it is referred to in the [_entity](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/entity.html) category.
- [atom_site.label_comp_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.label_comp_id.html) - PDB assigned residue name.
- [atom_site.auth_comp_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.auth_comp_id.html) - author provided or PDB assigned residue name.
- [atom_site.label_seq_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.label_seq_id.html) - unique and sequential residue number (starting from 1 including unmodeled residues) in the polymer sequence.
- [atom_site.auth_seq_id](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Items/_atom_site.auth_seq_id.html) - author provided residue number.

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|loop_|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.group_PDB|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.type_symbol|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_atom_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_alt_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_comp_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_asym_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_entity_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.label_seq_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.pdbx_PDB_ins_code|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.Cartn_x|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.Cartn_y|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.Cartn_z|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.occupancy|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.B_iso_or_equiv|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.pdbx_formal_charge|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.auth_seq_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.auth_comp_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.auth_asym_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.auth_atom_id|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|_atom_site.pdbx_PDB_model_num|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|ATOM|1|N|N|.|MET|A|1|1|?|10.121|49.201|18.054|1.00|88.02|?|40|MET|A|N|1|
|ATOM|2|C|CA|.|MET|A|1|1|?|8.837|48.574|18.359|1.00|85.54|?|40|MET|A|CA|1|
|ATOM|3|C|C|.|MET|A|1|1|?|7.968|48.387|17.110|1.00|78.31|?|40|MET|A|C|1|
|ATOM|4|O|O|.|MET|A|1|1|?|6.906|47.764|17.17|1.00|77.36|?|40|MET|A|O|1|
|ATOM|5|C|CB|.|MET|A|1|1|?|8.081|49.393|19.407|1.00|91.19|?|40|MET|A|CB|1|
|ATOM|6|C|CG|.|MET|A|1|1|?|8.647|49.264|20.815|1.00|97.92|?|40|MET|A|CG|1|
|ATOM|7|S|SD|.|MET|A|1|1|?|8.520|47.577|21.459|1.00|99.09|?|40|MET|A|SD|1|
|ATOM|8|C|CE|.|MET|A|1|1|?|10.226|47.245|21.909|1.00|96.88|?|40|MET|A|CE|1|
|ATOM|9|N|N|.|GLY|A|1|2|?|8.409|48.936|15.983|1.00|64.64|?|41|GLY|A|N|1|
|ATOM|10|C|CA|.|GLY|A|1|2|?|7.802|48.609|14.715|1.00|44.08|?|41|GLY|A|CA|1|
|ATOM|11|C|C|.|GLY|A|1|2|?|8.184|47.194|14.310|1.00|37.87|?|41|GLY|A|C|1|
|ATOM|12|O|O|.|GLY|A|1|2|?|8.744|46.415|15.082|1.00|32.33|?|41|GLY|A|O|1|
|ATOM|13|N|N|.|LEU|A|1|3|?|7.868|46.866|13.059|1.00|29.81|?|42|LEU|A|N|1|
|ATOM|14|C|CA|.|LEU|A|1|3|?|8.194|45.563|12.503|1.00|26.22|?|42|LEU|A|CA|1|
|..... (truncated for brevity)|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|HETATM|7475|O|O1|.|GOL|F|3|.|?|12.399|17.309|2.493|1.00|49.81|?|302|GOL|A|O1|1|
|HETATM|7476|C|C2|.|GOL|F|3|.|?|11.119|19.504|2.235|1.00|58.42|?|302|GOL|A|C2|1|
|HETATM|7477|O|O2|.|GOL|F|3|.|?|11.275|19.672|0.870|1.00|52.72|?|302|GOL|A|O2|1|
|HETATM|7478|C|C3|.|GOL|F|3|.|?|11.147|20.886|2.974|1.00|60.69|?|302|GOL|A|C3|1|
|HETATM|7479|O|O3|.|GOL|F|3|.|?|11.560|21.902|2.108|1.00|56.04|?|302|GOL|A|O3|1|
|..... (truncated for brevity)|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|HETATM|7536|O|O|.|HOH|P|5|.|?|-0.397|5.714|-2.954|1.00|55.09|?|401|HOH|A|O|1|
|HETATM|7537|O|O|.|HOH|P|5|.|?|1.933|22.895|0.037|1.00|41.11|?|402|HOH|A|O|1|
|HETATM|7538|O|O|.|HOH|P|5|.|?|18.942|20.641|12.691|1.00|35.07|?|403|HOH|A|O|1|
|HETATM|7539|O|O|.|HOH|P|5|.|?|-0.984|8.117|1.053|1.00|44.71|?|404|HOH|A|O|1|
|HETATM|7540|O|O|.|HOH|P|5|.|?|-0.000|-0.000|-4.882|0.50|38.73|?|405|HOH|A|O|1|
|HETATM|7541|O|O|.|HOH|P|5|.|?|6.821|7.758|19.352|1.00|65.84|?|406|HOH|A|O|1|
|HETATM|7542|O|O|.|HOH|P|5|.|?|6.505|18.912|6.900|1.00|43.17|?|407|HOH|A|O|1|
|HETATM|7543|O|O|.|HOH|P|5|.|?|-4.255|12.564|-7.163|1.00|53.88|?|408|HOH|A|O|1|