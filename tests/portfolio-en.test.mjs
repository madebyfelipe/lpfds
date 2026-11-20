import test from "node:test";
import assert from "node:assert/strict";
import { projects } from "../lib/portfolio.ts";
import { categoriaEn, localizarProjeto, textosEn } from "../lib/portfolio-texto.ts";

// O portfólio em inglês vive em /en/portfolio. Se um case novo entrar em
// lib/portfolio.ts sem o bloco em inglês, a página cai no português no meio do
// conteúdo em inglês — melhor quebrar aqui.

test("todo case publicado tem texto em inglês (e nenhum texto órfão)", () => {
  const slugs = projects.map((p) => p.slug);
  assert.deepEqual(Object.keys(textosEn).sort(), [...slugs].sort());
});

test("a tradução preserva a estrutura de cada case", () => {
  for (const project of projects) {
    const copy = textosEn[project.slug];
    assert.ok(copy.tagline.length > 20, `${project.slug}: tagline curta demais`);
    assert.ok(copy.statement.length > 5, `${project.slug}: statement vazio`);
    assert.ok(copy.scope.length > 0, `${project.slug}: escopo vazio`);
    assert.ok(copy.execution.length > 20, `${project.slug}: execução curta demais`);

    if (project.about) {
      assert.ok(
        copy.about && copy.about.split("\n\n").length === project.about.split("\n\n").length,
        `${project.slug}: nº de parágrafos do "sobre" difere do português`
      );
    }

    if (project.website) {
      assert.ok(copy.website, `${project.slug}: site entregue sem texto em inglês`);
      assert.equal(
        copy.website.pages.length,
        project.website.pages.length,
        `${project.slug}: nº de páginas do site difere do português`
      );
    }

    if (project.presentation?.text) {
      assert.ok(copy.presentationText, `${project.slug}: apresentação sem texto em inglês`);
    }
  }
});

test("a categoria em inglês cobre as categorias usadas", () => {
  for (const project of projects) {
    assert.ok(categoriaEn[project.category], `categoria sem tradução: ${project.category}`);
  }
});

test("localizarProjeto troca só o texto e mantém as mídias", () => {
  for (const project of projects) {
    const en = localizarProjeto(project, "en");
    assert.equal(en.images.cover, project.images.cover);
    assert.equal(en.gallery, project.gallery);
    assert.equal(en.website?.url, project.website?.url);
    assert.equal(en.website?.pages[0]?.src, project.website?.pages[0]?.src);
    assert.notEqual(en.tagline, project.tagline);
    assert.notEqual(en.category, project.category);
    // O português continua devolvendo o original, sem cópia.
    assert.equal(localizarProjeto(project, "pt"), project);
  }
});
