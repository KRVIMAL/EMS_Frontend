import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import customTabsStyles from "./CustomTabs.styles";

interface TabConfig {
  label: string;
  count?: number | null;
}

interface CustomProps {
  changeValue: Function;
  selected: string;
  tabConfig: TabConfig[];
  shodShowZeroInitially?: boolean;
}

const CustomTabs = (props: CustomProps) => {
  const classes = customTabsStyles;
  const [value, setValue] = useState(props.selected);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    props.changeValue(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.selected);
  }, [props.selected]);
  const getStyle = (isActive: boolean) => {
    return isActive ? classes.active : classes.inActive;
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent={{
          lg: "flex-start",
          sm: "flex-start",
          xs: "flex-start",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          {props.tabConfig?.map((tab: TabConfig) => {
            return (
              <Tab
                sx={{
                  padding: "0px",
                  margin: "5px 8px 5px 0px",
                  [`@media screen and (max-width: ${1390}px)`]: {
                    margin: "0px 8px 0px 0px",
                  },
                }}
                label={
                  <Box
                    sx={classes.tabBox}
                    style={getStyle(props.selected === tab.label)}
                  >
                    <Typography variant="body2" sx={classes.tabText}>
                      {tab.label}
                    </Typography>
                    {tab?.count! !== 0 && (
                      <Box sx={classes.counts}>
                        <Typography variant="body2">{tab.count}</Typography>
                      </Box>
                    )}
                  </Box>
                }
                value={tab.label}
              />
            );
          })}
        </Tabs>
      </Stack>
    </Box>
  );
};

export default CustomTabs;
