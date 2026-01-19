export async function handler(event) {
  const url = "https://metaforge.app/api/arc-raiders/events-schedule";

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=300",
      },
    },
    body: JSON.stringify(data),
  };
}
