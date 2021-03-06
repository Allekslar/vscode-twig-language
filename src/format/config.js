import vscode from 'vscode'
import prettydiff from 'prettydiff'

/**
 * # PrettyDiff Defaults
 */
export const defaults = prettydiff.defaults

/**
 * # Editor Configuration
 */
export const editor = vscode.workspace.getConfiguration('editor')
const twigConfig = vscode.workspace.getConfiguration('twig-language');

/**
 * Default Formatting Rules
 */

let tabSize = editor.tabSize;

if (twigConfig.tabSize > 0) {
    tabSize = twigConfig.tabSize;
}

export const rules = {
    html: {
        mode: 'beautify',
        language: 'html',
        lexer: 'markup',
        fix: true,
        indent_size: tabSize,
        new_line: twigConfig.newLine,
        object_sort: twigConfig.objSort,
        wrap: twigConfig.wrap,
        method_chain: twigConfig.methodchain,
        ternary_line: twigConfig.ternaryLine,
        preserve: twigConfig.preserve,
        space_close: twigConfig.spaceClose,
        ignore_tags: ['script',
            'style',
            'comment']
    },
    schema: {
        mode: 'beautify',
        language: 'JSON',
        lexer: 'script',
        indent_size: tabSize,
        new_line: twigConfig.newLine,
        object_sort: twigConfig.objSort,
        wrap: twigConfig.wrap,
        method_chain: twigConfig.methodchain,
        ternary_line: twigConfig.ternaryLine,
        preserve: twigConfig.preserve,
        space_close: twigConfig.spaceClose,
    },
    stylesheet: {
        mode: 'beautify',
        language: 'SCSS',
        lexer: 'style',
        indent_size: tabSize,
        new_line: twigConfig.newLine,
        object_sort: twigConfig.objSort,
        wrap: twigConfig.wrap,
        method_chain: twigConfig.methodchain,
        ternary_line: twigConfig.ternaryLine,
        preserve: twigConfig.preserve,
        space_close: twigConfig.spaceClose,
    },
    javascript: {
        mode: 'beautify',
        language: 'JavaScript',
        lexer: 'script',
        indent_size: tabSize,
        new_line: twigConfig.newLine,
        object_sort: twigConfig.objSort,
        wrap: twigConfig.wrap,
        method_chain: twigConfig.methodchain,
        ternary_line: twigConfig.ternaryLine,
        preserve: twigConfig.preserve,
        space_close: twigConfig.spaceClose,
    }
}

export default {
    editor,
    defaults,
    rules
}
