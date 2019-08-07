# Evaluation
Evaluation of all ISIC Challenge submissions is performed by the
[ISIC Challenge automated submission system](https://challenge.isic-archive.com/).

## Goal Metric
*Submissions are scored using a normalized multi-class accuracy metric* (balanced across categories).
Tied positions will be broken using the area under the receiver operating characteristic curve
(AUC) metric.

### Definition
Normalized (or balanced) multi-class accuracy is defined as the accuracies of each category,
weighted by the category prevalence. Specifically, it is the arithmetic mean of the
`(<category>_true_positives / <category>_positives)` across each of the diagnostic categories. This
metric is semantically equivalent to the average recall score.

### Rationale
Clinical application on skin lesion classification has two goals eventually: Giving specific
information and treatment options for a lesion, and detecting skin cancer with a reasonable
sensitivity and specificity. The first task needs a correct specific diagnosis out of multiple
classes, whereas the second demands a binary decision “biopsy” versus “don’t biopsy”. In the
former ISIC Challenges, focus was on the second task, therefore this year we want to rank for the
more ambitious metric of normalized multiclass accuracy, as it is also closer to real evaluation of
a dermatologist. This is also important for the extending reader study, where the winning
algorithm(s) will be compared to physicians performance in classification of digital images.

## Other Metrics
Participants will be ranked and awards granted based only on the balanced multi-class accuracy metric.
However, for scientific completeness, predicted responses will also have the following metrics
computed (comparing prediction vs. ground truth) for each image:

##### Individual Category Metrics
* [sensitivity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity#Sensitivity)
* [specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity#Specificity)
* [accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision#In_binary_classification)
* [area under the receiver operating characteristic curve (AUC)](https://en.wikipedia.org/wiki/Receiver_operating_characteristic#Area_under_the_curve)
* [mean average precision](http://fastml.com/what-you-wanted-to-know-about-mean-average-precision/)
* [F1 score](https://en.wikipedia.org/wiki/F1_score)
* [AUC integrated between 80% to 100% sensitivity (AUC80)]
* [positive predictive value (PPV)](https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values)
* [negative predictive value (NPV)](https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values)

##### Aggregate Metrics
* average AUC across all diagnoses
* malignant vs. benign diagnoses category AUC

## Validation Scoring
All submissions to the ISIC Challenge are immediately issued a validation score. *This validation
score is not intended to be used for algorithm ranking or evaluation*, but is provided for a sanity
check of submission data (e.g. to guard against instances where prediction labels are mismatched).

The validation score is computed with the goal metric (balanced multi-class accuracy), taken against
a small (~100), non-representative, pre-determined subset of images.

For reference, a random submission generates a validation score of about 0.3. 

## Final Score Release
Final scores and a public leaderboard are released shortly after the conclusion of the ISIC
Challenge submission period.

## Transparency Statement
The code of
[the `isic-challenge-scoring` package](https://github.com/ImageMarkup/isic-challenge-scoring/)
is used for actual score computation. This code is open source, permissively licensed, and published,
to facilitate external auditing.
