import React from "react";

const sizeClasses = {
  txtCormorantGaramondBold28: "font-bold font-cormorantgaramond",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtCormorantGaramondSemiBold32: "font-cormorantgaramond font-semibold",
  txtCormorantGaramondBold32: "font-bold font-cormorantgaramond",
  txtCormorantGaramondRegular16: "font-cormorantgaramond font-normal",
  txtCormorantGaramondBold28Gray600: "font-bold font-cormorantgaramond",
  txtPlayfairDisplayRomanMedium96: "font-medium font-playfairdisplay",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtCormorantGaramondSemiBold36: "font-cormorantgaramond font-semibold",
  txtCormorantGaramondSemiBold28: "font-cormorantgaramond font-semibold",
  txtCormorantGaramondBold36: "font-bold font-cormorantgaramond",
  txtCormorantGaramondBold48: "font-bold font-cormorantgaramond",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtCormorantGaramondMedium80: "font-cormorantgaramond font-medium",
  txtCormorantGaramondRegular80WhiteA700: "font-cormorantgaramond font-normal",
  txtCormorantGaramondSemiBold20: "font-cormorantgaramond font-semibold",
  txtCormorantGaramondBoldItalic85: "font-bold font-cormorantgaramond italic",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsRegular20WhiteA700: "font-normal font-poppins",
  txtCormorantGaramondBold48WhiteA700: "font-bold font-cormorantgaramond",
  txtCormorantGaramondRegular80: "font-cormorantgaramond font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
