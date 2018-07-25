# Switchboard -- rest-based interface: Installation

1. Download the sources from github, e.g.,

   ```git clone https://github.com/clarin-eric/LRSwitchboard-rest.git ```

2. Change to the source directory of the repo, and make the docker image, e.g., 

   ```docker build -t clauszinn/clrs-rest . ```

3. Run the docker container, e.g.,

   ```docker run -p 4511:8080 -d clauszinn/clrs-rest ```


Open, for instance,

   ```http://localhost:4511/api/getAllTools?includeWS=no&language=tur&sortTools=yes ```

in your browser to get json-based results on tools that match resource characterics.
