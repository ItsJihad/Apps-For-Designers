const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installed");
  if (storedAppSTR) {
    const storedApps = JSON.parse(storedAppSTR);
    return storedApps;
  } else {
    return [];
  }
};

const addAppstoDB = (id) => {
  const storedData = getStoredApp();
  if (storedData.includes(id)) {
    
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("installed", data);
  }
};

const RemoveAppsDB = (id) => {
  const storedData = getStoredApp();
  const updatedData = storedData.filter(appId => appId !== id);
  localStorage.setItem("installed", JSON.stringify(updatedData));
};

export { getStoredApp, addAppstoDB ,RemoveAppsDB};
