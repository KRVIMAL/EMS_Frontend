const CustomLoaderStyles = {
    outerBox:{
      direction:"column",
      justifyContent:"center",
      alignItems:"center",
      margin:"auto"
    },
   rotationStyle: {
      img:{
          animation: "rotation 2.5s infinite linear"
      },
      backgroundColor: "#6842ef",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "12px"
    },
  } as const;
  
  export default CustomLoaderStyles;
  