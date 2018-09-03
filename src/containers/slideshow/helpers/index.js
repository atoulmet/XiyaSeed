const importAll = r => r.keys().map(r); /////Mettre dans helper

export const getPicturesFromCountry = country => {
  if (country === "korea") {
    return importAll(
      require.context("../../../sources/img", false, /\.(png|JPG|svg)$/)
    );
  } else if (country === "japan") {
    return importAll(
      require.context("../../../sources/japan", false, /\.(png|JPG|svg)$/)
    );
  }
};
