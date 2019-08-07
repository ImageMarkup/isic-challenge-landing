---
home: true
---

<track-email/>

<div class="main-content">

<section class="summary">

# Background

Skin cancer is the most common cancer globally, with melanoma being the most deadly form. Dermoscopy
is a skin imaging modality that has demonstrated improvement for diagnosis of skin cancer compared
to unaided visual inspection. However, clinicians should receive adequate training for those
improvements to be realized. In order to make expertise more widely available, the International
Skin Imaging Collaboration (ISIC) has developed the ISIC Archive, an international repository of
dermoscopic images, for both the purposes of clinical training, and for supporting technical
research toward automated algorithmic analysis by hosting the ISIC Challenges.

# Task
The goal for ISIC 2019 is classify dermoscopic images among nine different diagnostic categories:
1. Melanoma
2. Melanocytic nevus
3. Basal cell carcinoma
4. Actinic keratosis
5. Benign keratosis (solar lentigo / seborrheic keratosis / lichen planus-like keratosis)
6. Dermatofibroma
7. Vascular lesion
8. Squamous cell carcinoma
9. None of the others

25,331 images are available for training across 8 different categories. Additionally, the test
dataset (planned release August 2nd) will contain an additional outlier class not represented in
the training data, which developed systems must be able to identify.

Two tasks will be available for participation: 1) classify dermoscopic images without meta-data,
and 2) classify images with additional available meta-data. Task 1's deadline will be August 9th.
Task 2 will be August 16th, after release of test meta-data on August 9th. Participants of Task 2
must submit to Task 1 as well, though participants can submit to Task 1 alone.

In addition to submitting predictions, each competitor is required to submit a link to a manuscript
describing the methods used to generate predictions.

# Submission
Submissions are made to the
[ISIC Challenge submission system](https://challenge.isic-archive.com/), which provides automated
format validation, pre-scoring, metadata editing capabilties.

More details about the submission process may be found [on the submission details page](./submit.md).

# Evaluation
Evaluation of algorithms is entirely automated, and rankings are determined by balanced multi-class
accuracy. At the conclusion of the ISIC Challenge, all scores are posted to a public leaderboard,
providing official rankings and more detailed metrics for every submission.

More details about the evaluation procedure may be found [on the evaluation details page](./evaluation.md).

# Awards
Cash prizes of $4,000, $2,000, and $1,000 will be awarded to the first, second, and third place 
participants of image-only and meta-data tasks. USD will be awarded to winners of each of the
tasks. The monetary prizes for the winners of the challenge will be awarded after the MICCAI 
Workshop in Shenzhen, China, in October 2019. The prizes are being provided by Canfield Scientific,
Inc., a US company, and are subject to any restrictions incumbent on the sponsor. Winners will be 
asked to identify a recipient individual or entity who will be required to provide tax documentation
(U.S. citizens- IRS form W-9, non-U.S. citizens Form W-8 BEN).

</section><!-- .summary -->

<section class="timeline">

# Timeline

- <span>Training data release <span class="date">May 3, 2019</span></span>
- <span>Test images release <span class="date">August 5, 2019</span></span>
- <span>Submission deadline: images-only test <span class="date">August 14, 2019</span></span>
- <span>Test metadata release <span class="date">August 14, 2019</span></span>
- <span>Submission deadline: images and metadata test <span class="date">August 21, 2019</span></span>
- <span>Winners announced, and speaker invitations sent <span class="date">August 28, 2019</span></span>
- <span>[MICCAI2019 Workshop](http://www.miccai2019.org/) <span class="date">October 13 or 17, 2019</span></span>

</section>

<section class="meta-info features">

<div class="feature chairs">

### Sponsors
- **Canfield Scientific**
- **IBM**
- **MetaOptima**

#### Clinical Chairs
- **Josep Malvehy, M.D.** <br>
*University Hospital Clinic of Barcelona, Barcelona, Spain*
- **Allan Halpern, M.D.** <br>
*Memorial Sloan Kettering Cancer Center, New York City, NY, USA*

#### Computer Vision Chairs
- **Noel C. F. Codella, Ph.D.** <br>
*IBM Research, Yorktown Heights, NY, USA*

</div>

<div class="feature co-chairs">

### Challenge Co-Chairs

- **M. Emre Celebi, Ph.D.** <br>
*University of Central Arkansas, Conway, AR, USA*
- **Marc Combalia, M.S.** <br>
*Fundació Clínic per a la Recerca Biomèdica, Barcelona, Spain*
- **David Gutman, M.D., Ph.D.** <br>
*Emory University, Atlanta, GA, USA*
- **Brian Helba** <br>
*Kitware, Inc., Clifton Park, NY, USA*
- **Harald Kittler, M.D.** <br>
*Medical University of Vienna, Vienna, Austria*
- **Veronica Rotemberg, M.D., Ph.D.** <br>
*Memorial Sloan Kettering Cancer Center, New York City, NY, USA*
- **Philipp Tschandl, M.D., Ph.D.** <br>
*Medical University of Vienna, Vienna, Austria*


</div>

<div class="feature disclaimer">

*Note: Any organizations/companies affiliated with members of the organizing committee are not excluded from participation in the Challenge, but must assure that their submissions are completely independent of the members of the organizing committee.*

</div>

</section> <!-- .meta-info -->

</div> <!-- .main-content -->
