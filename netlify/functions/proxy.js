export async function handler() {
  try {
    const response = await fetch(
      'https://metaforge.app/api/arc-raiders/events-schedule'
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Proxy failed" }),
    };
  }
}
