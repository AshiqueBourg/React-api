export async function fetchBranchesApi() {
    try {
      const response = await fetch('http://empower.besterpsolution.in/api/getbranchbycomp/6');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw new Error(`Fetch error: ${error}`);
    }
  }
  