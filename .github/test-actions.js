const { Octokit } = require("@octokit/core");

async function doSomething() {
  const octokit = Octokit({ auth: `${process.env.PAT_TOKEN}` })
  const resp = await octokit.request("GET /repos/{owner}/{repo}/actions/workflows", {
    owner: "prabum3",
    repo:"my-node-stack"
  })
  console.log(resp)
}

doSomething()
