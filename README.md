# TL_SocialDataPipelines
Python scripts for gathering and storing data from various social media platforms. Project tasks and specs, goals, notes, and updates are in the following sections.

If you need some help figuring out how to get started, are stuck, or just someone to talk to, feel free to contact Yarles. My Discord is Yarles404#1565, phone # is 515-559-3423. In the future, there should be a dedicated Discord server, and perhaps a Scrum Board.
#### Please Do:
1. Place (your name) next to tasks you've started
2. Whenever you start a task, create a new branch: git branch descriptive-branch-name
   - Remember to checkout your new branch: git checkout descriptive-branch-name
3. Place "DONE" when completed AND reviewed by Yarles
# Professional Development Tasks
Please place "DONE" by your name under the task when you're comfortable with what you've learned.
- Learned Docker with Python3
  - Someone
  - Gen / Kingsley = I have basic understanding, I will probably read up on more in the weekend if I have time!


# Development Tasks
- Place platform-specific notes in respective folder READMEs
- Verify usability of APIs and create sample script:
  - Twitch (Bhuwan)
  - Youtube
  - Twitter
  - Instagram (Kingsley / Gen)
  - Facebook (Kingsley / Gen)
  - TikTok
- Identify user interaction metrics (likes, retweets, etc if applicable):
  - Twitch (Bhuwan)
  - Youtube
  - Twitter
  - Instagram (Kingsley / Gen)
  - Facebook (Kingsley / Gen)
  - TikTok
- Identify user success metrics (followers, total views, etc if applicable):
  - Twitch (Bhuwan)
  - Youtube
  - Twitter
  - Instagram (Kingsley / Gen)
  - Facebook (Kingsley / Gen)
  - TikTok
- Create Python ORM (SQL Alchemy) for databases (Yarles)
- Create Dockerfiles (Yarles)


# Goals
1. Create scripts with parameters:
   - List of user handles for querying
   - Query user success and user interaction metrics for each user
   - Timestamp and insert into database

# Notes
- Will use PostgreSQL database to store metrics
- Python scripts will most likely run on AWS Lambda
- API Keys are stored as [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) and will be available as an environment variable in the repository.

# Updates
## 2022-01-12
Data pipeline repo created
Started identifying metrics

