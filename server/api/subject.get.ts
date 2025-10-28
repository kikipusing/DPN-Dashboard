export default defineEventHandler(async (event) => {
    try {
        // Ambil API key dari runtimeConfig
        const config = useRuntimeConfig();
        const apiKey = config.bpsApiKey;
        const baseUrl = `https://webapi.bps.go.id/v1/api/list/model/subject/lang/ind/domain/0000/key/${apiKey}/`;

        let allData: any[] = [];
        let page = 1;
        let hasNext = true;

        while (hasNext) {
            const url = `${baseUrl}?page=${page}`;
            const response: any = await $fetch(url);

            // Ambil data array pada index ke-1 dari response.data
            const pageData = Array.isArray(response.data)
                ? response.data[1]
                : [];

            if (Array.isArray(pageData)) {
                allData = allData.concat(pageData);
            }

            // Cek pagination dari response.data[0]
            const pagination = Array.isArray(response.data)
                ? response.data[0]
                : null;

            if (pagination && pagination.page < pagination.pages) {
                page++;
            } else {
                hasNext = false;
            }
        }

        return {
            success: true,
            data: allData,
        };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Gagal mengambil data dari API BPS.",
        };
    }
});
