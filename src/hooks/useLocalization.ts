import { useContext, useState } from "react";
import LocalizationContext from "src/contexts/localization.context";

const texts = {
  id: {
    or: "Atau",
    login: "Masuk",
    register: "Daftar",
    myNote: "Catatanku",
    myArchive: "Arsip Catatanku",
    logout: "Keluar",
    confirmPassword: "Konfirmasi password",
    alreadyHaveAnAccount: "Sudah punya akun?",
    invalidEmail: "email tidak valid",
    addNote: "Tambah catatan",
    title: "Judul",
    content: "Konten",
    emptyContent: "Buat tulisan baru atau lihat tulisan lama pada panel kiri.",
    emptyNote: "Tidak ada catatan.",
  },
  en: {
    or: "Or",
    login: "Login",
    register: "Register",
    myNote: "My Notes",
    myArchive: "My Archive",
    logout: "Logout",
    confirmPassword: "Confirm password",
    alreadyHaveAnAccount: "Already have an account?",
    invalidEmail: "email is invalid",
    addNote: "Add Note",
    title: "Title",
    content: "Content",
    emptyContent: "Create note or view note on the left panel.",
    emptyNote: "Note is empty.",
  },
};

function useLocalization() {
  const localContext = useContext(LocalizationContext);

  return (key: keyof typeof texts.en) =>
    texts[localContext.language][key] as string;
}

export default useLocalization;
