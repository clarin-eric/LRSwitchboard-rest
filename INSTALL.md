# Switchboard -- rest-based interface: Installation

1. Download the sources from github, e.g.,

   ```git clone https://github.com/clarin-eric/LRSwitchboard-rest.git ```

2. Change to the source directory of the repo, and make the docker image, e.g., 

   ```docker build -t clauszinn/switchboard-rest . ```

3. Run the docker container, e.g.,

   ```docker run -p 4511:8080 -d clauszinn/switchboard-rest ```


Open, for instance,

   ```http://localhost:4511/api/tools?includeWS=no&language=tur&sortTools=yes&includeBetaSoftware=no ```

in your browser to get json-based results on tools that match resource characterics.

