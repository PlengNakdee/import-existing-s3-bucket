import { CfnOutput, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class BucketStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'SomeUniqueBucketName', {
      bucketName: 'some-unique-bucket-name',
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new CfnOutput(this, 'BucketRef', {
      value: bucket.bucketName,
    });

  }
}
