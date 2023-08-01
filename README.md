# Historical Data

This project is a repository for historical data collected and transformed by the
[Data Retrieval](https://github.com/papercliff/data-retrieval) project. The data is used by the
[Graph Vis](https://github.com/papercliff/graph-vis) project to create visualizations of network nodes and edges.

## Data Structure

For each day, there are four types of data files:

- `collected/YYYY-MM-DD-single-day-keywords.json`: This file contains the **keywords** of papercliff data collected for
the day.
- `collected/YYYY-MM-DD-single-day-combinations.json`: This file contains the **combinations** of papercliff data
collected for the day.
- `transformed/YYYY-MM-DD-single-day-clusters.json`: This file contains the **clustered** data, which was transformed
from the collected data of the same day.
- `transformed/YYYY-MM-DD-single-day-actions.json`: This file contains the **actions** derived from the collected and
transformed data of the same day.

## How to Use

To use the data in this repository, access the required file according to the date and type of data you need. For
example, to access the collected keywords for January 1, 2023, the file path would be
`collected/2023-01-01-single-day-keywords.json`.

**Note**: This repository does not contain code. It is a data repository and only contains data files.

Please refer to [Data Retrieval](https://github.com/papercliff/data-retrieval) and
[Graph Vis](https://github.com/papercliff/graph-vis) for more information on how they interact with this repository.
