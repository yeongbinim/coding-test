const request = async(name) => {
	try {
		const res = await fetch(`/data/${name}.json`);
		if (!res.ok)
			throw new Error("서버의 상태가 이상합니다!");
		return await res.json();
	}
	catch(e) {
		throw new Error(`무언가 잘못 되었습니다. ${e.message}`);
	}
}

export default request;
