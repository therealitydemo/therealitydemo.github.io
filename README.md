# IPQ Cal - A illustrative tool helps you with analyzing IPQ data

## What is IPQ?

**Igroup Presence Questionnaire**

Igroup Presence Questionnaire or IPQ is a questionnaire used for evaluate the level of presence users perceive in the virtual environment. The IPQ was developed based on four general principles and requirements: (1) it was developed on top of a theoretical framework around cognitive processes, (2) it should clearly distinguish between the concepts of immersion and presence, (3) it should be practical to apply in terms of length and versatility, and finally (4) it should be validated with a statistical model. As an instrument, the IPQ is composed of 13+1 items, each as a 7-point Likert scale between -3 and 3, expressing full disagreement and full agreement, respectively. It consists of three sub scales (spatial presence (SP), involvement (INV), experience realism (REAL)) plus one general presence (GP) question. For more information, please visit the IPQ homepage at here or read our manuscript.

**Questionnaire Template**

The whole questionnaire template can be downloaded at [here](https://therealitydemo.github.io/assets/documents/ipq_template.pdf).

## Usage Guidelines

**Input Data Format**

The current version of the tool could support upto two different independent variable. The input data has to be in Comma Separated Values format. In addition, the file should be formated as below:
![alt text](https://therealitydemo.github.io/assets/pictures/upload_data_format.png)

There are some compulsory attributes in the input data. For those, the records has to be provided. They are:
- **experiment_design**: between-subject or within-subject
- **number_of_experimental_conditions**: is the number of independent variables
- **number_of_entries**: the number of entry rows of recordes
- **participant_id**: each participant has to have a unique id in order distinguish with others
- **visual_display**: 3D - Monoscopic or 3D - HMD VR or Projection Display (eg. CAVE)
- **experiment_condition**: the name given for each independent variable
All of the requied data are highlighted in Orange color.

**Template File**

The template for the input data can be downloaded at [here](https://therealitydemo.github.io/assets/documents/data_template.csv). For more information, please contact the authors.
