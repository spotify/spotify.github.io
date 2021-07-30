/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from "fs";
import YAML from "yaml";
import { graphql } from "@octokit/graphql";

const file = fs.readFileSync("./_data/projects.yaml", "utf8");
const languages = YAML.parse(file);
const languagesGenerated = [];

console.log("\n---> Fetching repository info from Github\n");

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `Token ${process.env.GH_TOKEN}`,
  },
});

for (const language of languages) {
  const generatedProjects = await Promise.all(
    language.projects.map(async (project) => {
      const [, user, repo] = project.url.match(
        /^https:\/\/github.com\/(.+)\/(.+)$/
      );

      console.log(`Fetching info for: ${user}/${repo}`);

      const { repository: gqplRepository } = await graphqlWithAuth(`
                    {
                      repository(owner: "${user}", name: "${repo}" ) {
                        name,
                        description,
                        stargazerCount,
                        forkCount,
                        url,
                        openIssues: issues(states: OPEN) {
                            totalCount
                        }
                        watchers{
                            totalCount
                        }
                      }
                    }
                  `);
      return gqplRepository;
    })
  );
  languagesGenerated.push({ ...language, projects: generatedProjects });
}

const languagesYaml = YAML.stringify(languagesGenerated);
fs.writeFile("./_data/projects_generated.yaml", languagesYaml, (err) => {
  if (err) throw err;
  console.log("\n---> Generated projects_generated.yaml\n");

  if (typeof callback === "function") {
    callback();
  }
});
