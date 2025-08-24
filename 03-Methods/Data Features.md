For Breakdown of Database entries see [[Dataset-Info]]
![[1-s2.0-S2666389920300246-fx1.jpg]]
DataTyes: 
#string , #numerical, #categorical, #range

# Tasks

- [ ] Find meta data information to incorporate into the model -> what type of metadata does alpha fold use? ⏫ 
- [x] Filter out the refinement information for loss incorporation ✅ 2025-08-17
- [ ] Analyse missing values for all proteins ⛔ fg69a2
# Input

## Sequence Input 
- `_entity_poly.pdbx_seq_one_letter_code_can`: The **canonicalized** one-letter amino acid sequence derived from the model and PDB chemical dictionary.  #string 
	- sequence length, % composition (hydrophobic, charged, polar), aromatic content
	- Global descriptors: GRAVY/hydropathy mean & variance, net charge at pH X, predicted pI, aliphatic index
	- Motifs/tags/mutations: `_entity_poly.pdbx_mutation`, N/C-terminal tags in construct description
	- Disorder/low complexity (e.g., percent of AA in low-complexity runs)
	- Cys count / potential disulfides (useful for stability/crystallizability)

## Structure Input 
- `_atom_site`: Coordinates, residue mapping via `label_asym_id, label_seq_id, label_comp_id` 
	- Secondary structure content (α/β/coil) — run DSSP on the structure to get per-residue, then aggregate
	- Solvent-accessible surface area: mean/median and per-residue distribution
	- Contact/distance features: residue–residue contact map (e.g., <8 Å CA–CA), graph degree distribution
	- Oligomeric state & symmetry (biol. assembly): `_pdbx_struct_assembly`, `_pdbx_struct_assembly_gen`
	- Ligands/cofactors/ions present: `_pdbx_entity_nonpoly`, `_chem_comp` (presence & counts)
	- Flexibility proxies: B-factor stats per chain/residue (`_atom_site.B_iso_or_equiv`)
	- Missing residues/gaps: compare `_entity_poly_seq` vs observed residues

## Meta data Input
- 
# Label 
- Aim: predict experiment conditions for crystal grow
- Build on: [PDBx/mmCIF Crystal Grow Entry](https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Categories/exptl_crystal_grow.html)
- Use: `_exptl_crystal_grow`
	- Used in 81% of entries in the database

## Crystallization Growth Conditions
- All starting with `_exptl_crystal_grow.` indicating part of crystallization experiment
- Only currently used data items are explained. This excludes: Appartus, atmosphere, method_ref, pressure_esd, seeding_ref, temp_esd, time
- `crystal_id`: 
	- required in all entries using crystal growth
	- This data item is a pointer to `_exptl_crystal.id` in the `EXPTL_CRYSTAL` category
	- #numerical 
- `details`:  
	- 0.0004% 
	- description of special aspects of the crystal growth 
	- #string 
- `method`: 
	- 72% 
	- the method used to grow crystals
	- #categorical 
	- Allowed values: BATCH MODE, COUNTER-DIFFUSION, EVAPORATION, RECRYSTALLIZATION, IN CELL, LIPIDIC CUBIC PHASE, LIQUID DIFFUSION, MICROBATCH, MICRODIALYSIS, MICROFLUIDIC, SLOW COOLING, SMALL TUBES, VAPOR DIFFUSION, HANGING DROP, SITTING DROP
- `pH: 
	- 63.4%
	- The ph at which the crystal was grown. If more than one pH was employed during the crystallization process, the final pH should be noted here and the protocol involving multiple pH values should be described in `_exptl_crystal_grow.details` 
	- #numerical 
	- Minimum Value: 0.0, Maximum Value: 14.0
	- Advisory Boundary: 3.5-10.0
- `pdbx_details`: 
	- 80%
	- Text description of crystal growth procedure
	- example: PEG 4000, potassium phosphate, magnesium chloride, cacodylate
	- #string 
- `pdbx_pH_range`: 
	- 3.2 %
	- The range of pH values at which the crystal was grown. Used when a point estimate of pH is not appropriate.
	- #range 
- `pressure`
	- 0.008 %
	- The ambient pressure in kilopascals at which the crystal was grown.
	- #numerical 
- `seeding`
	- 0.005%
	- A description of the protocol used for seeding the crystal growth.
	- example: macroseeding
	- #categorical 
- `temperature`
	- 72%
	- The temperature in kelvins at which the crystal was grown. If more than one temperature was employed during the crystallization process, the final temperature should be noted here and the protocol involving multiple temperatures should be described in _exptl_crystal_grow.details.
	- #numerical 
	- Advisory Boundary Conditions: 277-316
- `temp_details`
	- 0.8%
	- A description of special aspects of temperature control during crystal growth.
	- #string 
#### Category Example

    _exptl_crystal_grow.crystal_id      1
    _exptl_crystal_grow.method          'VAPOR DIFFUSION, HANGING DROP'
    _exptl_crystal_grow.apparatus       'Linbro plates'
    _exptl_crystal_grow.atmosphere      'room air'
    _exptl_crystal_grow.pH              4.7
    _exptl_crystal_grow.temp            291
    _exptl_crystal_grow.time            'approximately 2 days'
    
 ![[Pasted image 20250811115817.png]]


## Crystal quality for loss incorporation
