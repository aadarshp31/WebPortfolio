(async () => {
  await coldStartServers();
})();

async function coldStartServers() {
  try {
    const list = [
      "https://pockettracker-server.onrender.com/api",
      "https://ecommerce-server-2fce.onrender.com/api/products",
    ];

    console.log("Cold Starting Servers");

    const promises = [];

    for (let i = 0; i < list.length; i++) {
      promises.push(fetch(list[i]));
    }

    await Promise.all(promises);
    console.log("Cold Starting Servers Successful");
  } catch (error) {
    console.error("Cold Starting Servers Failed");
  }
}
