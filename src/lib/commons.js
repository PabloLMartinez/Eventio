import shajs from "sha.js";

export function sha512(str) {
  return shajs("sha512").update(str).digest("hex");
}

export const customStringify = json => {
  const cache = new Set();
  return JSON.stringify(json, function (key, value) {
    if (typeof value === "object" && value !== null){
      if (cache.has(value)){
        return;
      }
      cache.add(value);
    }
    return value;
  });
};
