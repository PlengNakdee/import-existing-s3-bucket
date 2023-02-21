import 'source-map-support/register';
import { App }from 'aws-cdk-lib';
import { BucketStack } from '../lib/bucket-stack';

const app = new App();
new BucketStack(app, 'ImportExistingS3BucketStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});