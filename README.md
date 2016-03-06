# hilight
This package means to be a simple console highligher. It can be used to hilight given words or expressions. It's compatible with pipes, so one can easily pipe log output to it and highlight some part of it.
For example the following command parses a log file to find durations for all MySQL calls:
```sh
cat logfile.log | grep MySQL | hili "duration: \d+"
```

# Installation

This is a CLI tool, so one should install it globbally using the following command:
```sh
npm install hili -g
```

# Features

- RegEx support by default
- easy to use

# Roadmap

A list of features planned to be implemented:

- ability to set color using commandline args
- line highlighting (one could want to highlight entire line based on some filters) - easier to spot 