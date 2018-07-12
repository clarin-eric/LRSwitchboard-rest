# LRSwitchboard (rest-based back-end)
Code Repository for the *rest-based back-end* of the Language Resources Switchboard of CLARIN.

The implementation is based upon nodejs and the express library. The code provides a rest-based interface
to the switchboard's resource-tool matching service.

The new design separates the switchboard's front-end with those parts that find applicable tools
for a given resource. The back-end consists of

- the tool registry 
- the matcher
- and the rest api with calls to the matcher.

# Website

The switchboard is open for business at

```https://switchboard.clarin.eu ```

For the time being, note however that only the development version of the switchboard makes use of the new
design, which is served at

```https://weblicht.sfs.uni-tuebingen.de/clrs-dev/#/ ```


# Status

The rest-based interface of the LRSwitchboard is currently being developed and actively
maintained. It has no official release yet.  For more information on the switchboard, see

```https://github.com/clarin-eric/LRSwitchboard ```



