import { Stack, StackProps } from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = Bucket.fromBucketName(this, 'ImportedBucket', 'test-bucket');

    new NodejsFunction(this, 'TestFunction', {
        entry: path.join(__dirname, `/../lambda/lambda-handler.ts`),
        handler: 'handler',
        environment: {
            BUCKET: bucket.bucketName,
          },
    })

  }
}