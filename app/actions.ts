"use server";

export async function myAction(formData: FormData) {
  console.log("name", formData.get("name"));
}
