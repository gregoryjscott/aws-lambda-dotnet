# aws-lambda-dotnet

This project tries to use [apex](http://github.com/apex/apex) to turn the [helloworld .NET sample](https://github.com/dotnet/core/tree/master/samples) into an AWS Lambda. The goal is to return `"Hello World!"` from .NET running on AWS Lambda. If successful, running `npm start` will create the AWS Lambda on AWS, invoke it (calling .NET code), and return the result.

The `dist/` directory is set up like apex expects and `src/` contains the .NET sample project. See `package.json` for the scripts.

My hope is that this will run as-is if compiled on a [Amazon Linux machine](https://aws.amazon.com/amazon-linux-ami/). (If compiled with my Mac it throws `/var/task/helloworld: cannot execute binary file` when invoked.) I guess I'll have to build a server to find out. I should also mention that I don't really understand all the implications of passing `--native` and `--cpp` to `dotnet compile` but it looks cool.

To play:

1. Set up everything [apex](http://github.com/apex/apex) requires which includes a AWS account.
1. Install the latest [.NET Core SDK](http://dotnet.github.io/) to get the `dotnet` CLI.
1. Install Node.js if you want to run the npm tasks.
