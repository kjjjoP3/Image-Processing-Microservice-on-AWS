# Image Processing Microservice on AWS

### Project Overview

This microservice processes images by applying a filter and is deployed on AWS Elastic Beanstalk.

### Deployment URL:

### The Checklist
URL (BeanStack): http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/

* [X]  Deploying the code successfully
* [X]  Pass the test after deploying

### Testing

Testing URL in success case: (status `200` with filtered image)

* BeanStack URL: http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-dep-thien-nhien-3d-003.jpg

Testing URL in failure case (don't have image_url in param): (status `400` with error message)

* BeanStack URL: http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=

Testing URL in failure case (function `filterImageFromURL` not working):
(status `422` with error message)

* BeanStack URL: http://image-processing-microservice-on-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-dep-thien-nhien-3d-0013.jpg
