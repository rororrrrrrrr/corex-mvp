export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/decide/optimize') {
      return new Response(JSON.stringify({
        title: "Decision (mock)",
        summary_steps: ["צעד 1","צעד 2","צעד 3"],
        numbers_signed: {"DriftStartPct": 6.1, "DriftTargetPct": 4.0},
        p_bands: {"after_tax_return_12m": {"p10": 3.0, "p50": 7.2, "p90": 10.9}},
        do_now: ["אשר ובצע"]
      }), { headers: { "content-type": "application/json; charset=utf-8" } });
    }
    return new Response("OK");
  }
}