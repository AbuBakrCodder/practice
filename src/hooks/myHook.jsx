import { useState, useEffect } from "react";

export default function useFetch(api) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // get data
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(api);
      if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [api]);

  // create new user
  const createUser = async (newUser) => {
    try {
      setLoading(true);
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
      const json = await res.json();
      setData((prev) => (prev ? [...prev, json] : [json]));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // delete user
  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`${api}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
      setData((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // form data
  const formData = (form) => {
    const fd = new FormData(form);
    const newUsr = {};
    for (let [key, value] of fd.entries()) newUsr[key] = value;
    return newUsr;
  };

  return { data, error, loading, formData, createUser, deleteUser };
}
