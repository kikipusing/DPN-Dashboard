export default defineEventHandler(async (event) => {
    try {
        // Ambil API key dari runtimeConfig
        const config = useRuntimeConfig();
        const apiKey = config.bpsApiKey;
        const url = `https://webapi.bps.go.id/v1/api/list/model/subcat/lang/ind/domain/0000/key/${apiKey}/`;

        const response: any = await $fetch(url);

        // Ambil data array pada index ke-1 dari response.data
        const data = Array.isArray(response.data) ? response.data[1] : [];

        return {
            success: true,
            data,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Gagal mengambil data subcat dari API BPS.",
        };
    }
});
