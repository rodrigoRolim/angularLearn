"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDataService {
    createDb() {
        let tasks = [
            { id: 1, tarefa: "vamos", descricao: "Construir o módulo A", data: "23/12/2018" },
            { id: 2, tarefa: "cade", descricao: "Construir o módulo B", data: "23/12/2018" },
            { id: 3, tarefa: "o que rapaz", descricao: "Construir o módulo C", data: "23/12/2018" },
            { id: 4, tarefa: "a bola", descricao: "Construir o módulo D", data: "23/12/2018" },
            { id: 5, tarefa: "teu c", descricao: "Construir o módulo E", data: "23/12/2018" }
        ];
        return { tasks };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map