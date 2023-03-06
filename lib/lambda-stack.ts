import { Stack, StackProps } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = Bucket.fromBucketName(this, 'ImportedBucket', 'some-unique-bucket-name');

    new Function(this, 'ShowBucketNameFunction', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'lambda-handler.handler',
        code: Code.fromAsset(path.join(__dirname, '/../lambda')),
        environment: {
            BUCKET: bucket.bucketName,
          },
      });

  }
}
