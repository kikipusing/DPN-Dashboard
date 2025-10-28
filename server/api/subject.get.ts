export default defineEventHandler(async (event) => {
    try {
        const apiKey = "8288d8695ea05dcea605fd94b1a41f22";
        const baseUrl = `https://webapi.bps.go.id/v1/api/list/model/subject/lang/ind/domain/0000/key/${apiKey}/`;

        let allData: any[] = [];
        let page = 1;
        let hasNext = true;

        while (hasNext) {
            const url = `${baseUrl}?page=${page}`;
            const response: any = await $fetch(url);

            // Ambil data array pada index ke-1 dari response
            const pageData = Array.isArray(response)
                ? response[1]
                : response.data || [];
            allData = allData.concat(pageData);

            // Cek pagination
            let pagination;
            if (Array.isArray(response)) {
                pagination = response[0];
            } else if (response.pagination) {
                pagination = response.pagination;
            }

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
