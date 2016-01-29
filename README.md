# aws-lambda-dotnet

This combines the [helloworld .NET sample](https://github.com/dotnet/core/samples) with [apex](http://github.com/apex/apex) for administering AWS Lambda. The goal is to return `"Hello World!"` from .NET running on AWS Lambda. If successful, running `npm start` will create the AWS Lambda on AWS, invoke it (calling .NET code), and return the result.

The `dist/` directory is set up like apex expects and `src/` contains the .NET sample project. See `package.json` for the scripts.

My hope is that will run as-is if the compile step is ran on a [Amazon Linux machine](https://aws.amazon.com/amazon-linux-ami/). Compiled with my Mac it throws `/var/task/helloworld: cannot execute binary file` when the AWS Lambda is invoked on Amazon. Additionally, the Node.js code that runs the .NET executable isn't reading returned data correctly (it needs to be replaced with a proper apex plugin anyway). I should also mention that I don't really understand all the implications of passing `--native` and `--cpp` to `dotnet compile` but it looks cool.

To play:
1. Set up everything [apex](http://github.com/apex/apex) requires which includes a AWS account.
1. Install the latest [.NET Core SDK](http://dotnet.github.io/) to get the `dotnet` CLI.
1. Install Node.js if you want to run the npm tasks.
