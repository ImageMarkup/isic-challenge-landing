# Submission Process

Participation in the ISIC Challenge requires registration of three categories of information with
the  [ISIC Challenge automated submission system](https://challenge.isic-archive.com/):
* **Team**; describing the collaboration who produced the submission
* **Approach**; describing the details of the algorithm which generated the submission
* **Submission**; containing the actual predictions required by the task

*All submissions must be made to the
[ISIC Challenge submission system](https://challenge.isic-archive.com/). Emailed or publicly
posted submissions will not be accepted or evaluated.*

## Team
Exactly one team should be created for each unique collaborative group. *Attempting to create
multiple teams with the same membership in order to bypass approach and submission limits
(described below) is a violation of the ISIC Challenge rules.*

For each major year of the ISIC Challenge (e.g. 2018, 2019, ISIC Live), a new group must be created.

Creating a team requires the following information:
* Team name: A unique name for your group.
* Institution name *(optional)*: The name of your sponsoring institution or laboratory.
* Institution URL *(optional)*: The website of your sponsoring institution or laboratory.
* Team member email addresses *(optional; multiple)*: Additional members of your team, who will be
  invited to access the submission system.

The team may be edited at any time, until the submission period ends, at which point the team will
be frozen.

## Approach
Within a team, one approach should be created for each unique algorithm. Approach algorithms may
differ significantly, or simply use different hyperparameters, but distinctions should be rigorously
defined.

*For the ISIC 2019 Challenge, a maximum of three (3) approaches may be created.* If you accidentally
create three approaches, and want to use another algorithm with your final submission, simply edit
one of your existing approaches.

Creating an approach requires the following information:
* Approach name: A unique sentence-length title for the approach, noting its major characteristics.
* Approach description: A paragraph length description of the approach, suitable for use as a
  published abstract.
* External data use: If the approach was trained with any data beyond that provided by the ISIC
  Challenge task at hand, this must be disclosed.
* Manuscript: An uploaded PDF document, at least 4 pages in length, describing the approach in
  sufficient detail as to allow an expert to reproduce it. A single PDF can be used across multiple
  submissions if all methods are properly described. The PDFs will go through a manual review process. 
  Inadequate documentation may result in disqualification.
* Docker image *(optional)*: A Docker image tag, referencing a containerized instance of the
  approach's software. If provided, this must accept arbirary images as input, and follow the
  specifications detailed in the [`isic/isic-algorithm-example` Docker image](https://github.com/ImageMarkup/isic-algorithm-example).

The approach may be edited at any time (allowing upload of revised manuscripts, etc.), until the
submission period ends, at which point the approach will be frozen.

## Submission
Within an approach, an unlimited number of submission files may be uploaded, but *only the most
recently uploaded will be used for final scoring.*

The submission file encodes sets of binary classification confidences for each of the 9 disease
states, indicating the diagnosis of each input lesion image.

### Submission File Format
*For the ISIC 2019 Challenge, the format of a submission file exactly matches that of the
`ISIC_2019_Training_GroundTruth.csv` file.*

A submission file is a single CSV (comma-separated value) file, with each input lesion response in
a row. File columns must be:
* image: an input image identifier of the form `ISIC_0000000`
* MEL: “Melanoma” diagnosis confidence
* NV: “Melanocytic nevus” diagnosis confidence
* BCC: “Basal cell carcinoma” diagnosis confidence
* AK: “Actinic keratosis” diagnosis confidence
* BKL: “Benign keratosis (solar lentigo / seborrheic keratosis / lichen planus-like keratosis)” diagnosis confidence
* DF: “Dermatofibroma” diagnosis confidence
* VASC: “Vascular lesion” diagnosis confidence
* SCC: "Squamous cell carcinoma"
* UNK: None of the others / "out of distribution" diagnosis confidence

Diagnosis confidences are expressed as floating-point values in the closed interval [0.0, 1.0],
*where 0.5 is used as the binary classification threshold*.

Note that arbitrary score ranges and thresholds can be converted to the range of 0.0 to 1.0,
with a threshold of 0.5, trivially using the following sigmoid conversion:

1 / (1 + e^(-(a(x - b))))

where x is the original score, b is the binary threshold, and a is a scaling parameter (i.e. the
inverse measured standard deviation on a held-out dataset). Predicted responses should set the
binary threshold b to a value where the classification system is expected to achieve 89%
sensitivity, although this is not required.

Predicted diagnosis confidence values may vary independently, though exactly one disease state is
actually present in each input lesion image.

### Submission File Example
A snippet of an example submission file is provided here:
```csv
image,MEL,NV,BCC,AK,BKL,DF,VASC,SCC,UNK
ISIC_0000000,0.5723914558616224,0.7463878619687879,0.8076234232128179,0.9231897707170799,0.19332526246835713,0.6482625474437913,0.15089641515561825,0.11825691475790101,0.04267257654105516
ISIC_0000001,0.9684305100247566,0.5872927315239898,0.916092863517633,0.8093387127031818,0.23901828955860294,0.05252914296507549,0.3436226223051383,0.8350598659947699,0.6641733252475985
ISIC_0000002,0.506131598640143,0.23904223621096332,0.029747905783066964,0.8791070854374194,0.7577864003676547,0.15820430519230155,0.7691369933394947,0.38171398898367126,0.6782697508415045
```

Note several key elments:
* A header row is provided
* The `image` field uses values with an `ISIC_` prefix and without any `.jpg` file extensions
* The values are floating point (`0` and `1` are invalid, but `0.0` and `1.0` are valid)
* The row values do not necessarily sum to `1.0`
* The greatest value of each row is considered the overall diagnosis prediction
* All values greater than `0.5` are considered positive binary diagnosis predictions

### Submission Scoring
The automated scoring of submission files is described in more detail
[on the evaluation details page](./evaluation.md).
