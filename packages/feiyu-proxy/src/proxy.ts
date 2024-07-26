import { main } from "./index";
import { generateAPIEvent } from "./utils/scf/events";

export default async function handler(request, response) {
  const req = generateAPIEvent({
    method: request.method as any,
    path: request.url?.replace("/api", ""),
    headers: request.headers,
    query: request.query as any,
    data: request.body,
  });
  const results = await main(req);
  response.writeHead(results.statusCode, results.headers);
  response.end(results.body);
}
