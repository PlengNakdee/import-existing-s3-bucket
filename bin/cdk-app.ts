import 'source-map-support/register';
import { App }from 'aws-cdk-lib';
import { BucketStack } from '../lib/bucket-stack';
import { LambdaStack } from '../lib/lambda-stack';

const app = new App();

new BucketStack(app, 'BucketStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new LambdaStack(app, 'LambdaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})